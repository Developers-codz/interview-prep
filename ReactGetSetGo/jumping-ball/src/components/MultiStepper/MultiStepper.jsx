import { useState } from "react";
import StepIndicator from "./StepIndicator";
import "./MultiStepper.css";

/**
 * MultiStepper — config-driven wizard that walks users through multiple steps.
 *
 * @param {Object[]} steps - Array of step configs: { id, title, content, validate? }
 * @param {number} initialStep - Starting step index (default 0)
 * @param {number|null} currentStep - Controlled step index; pass with onStepChange
 * @param {Function} onStepChange - Called with new index whenever step changes
 * @param {Function} onComplete - Called when user finishes the last step
 * @param {boolean} allowStepClick - Allow jumping to completed steps via header click
 */
function MultiStepper({
  steps = [],
  initialStep = 0,
  currentStep: controlledStep = null,
  onStepChange,
  onComplete,
  allowStepClick = false,
}) {
  const [internalStep, setInternalStep] = useState(initialStep);
  const [error, setError] = useState("");

  const isControlled = controlledStep !== null;
  const activeStep = isControlled ? controlledStep : internalStep;
  const totalSteps = steps.length;
  const isFirst = activeStep === 0;
  const isLast = activeStep === totalSteps - 1;
  const current = steps[activeStep] ?? {};

  // Syncs step index in controlled or uncontrolled mode and clears errors.
  const goToStep = (index) => {
    if (index < 0 || index >= totalSteps) return;

    if (!isControlled) setInternalStep(index);
    onStepChange?.(index);
    setError("");
  };

  // Runs optional per-step validate() before allowing forward navigation.
  const handleNext = () => {
    if (current.validate) {
      const result = current.validate();
      if (result !== true) {
        setError(typeof result === "string" ? result : "Please complete this step.");
        return;
      }
    }

    if (isLast) {
      onComplete?.();
      return;
    }

    goToStep(activeStep + 1);
  };

  const handlePrev = () => goToStep(activeStep - 1);

  // Only completed steps (or current) are clickable when allowStepClick is on.
  const handleIndicatorClick = (index) => {
    if (!allowStepClick || index > activeStep) return;
    goToStep(index);
  };

  if (!totalSteps) return null;

  return (
    <div className="multi-stepper">
      <div className="multi-stepper__indicators" role="tablist">
        {steps.map((step, index) => (
          <StepIndicator
            key={step.id ?? index}
            index={index}
            title={step.title}
            isActive={index === activeStep}
            isCompleted={index < activeStep}
            isClickable={allowStepClick && index <= activeStep}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>

      <div className="multi-stepper__content" role="tabpanel">
        <h2 className="multi-stepper__title">{current.title}</h2>
        <div className="multi-stepper__body">{current.content}</div>
        {error && <p className="multi-stepper__error">{error}</p>}
      </div>

      <div className="multi-stepper__actions">
        <button
          type="button"
          className="multi-stepper__btn"
          onClick={handlePrev}
          disabled={isFirst}
        >
          Back
        </button>
        <button
          type="button"
          className="multi-stepper__btn multi-stepper__btn--primary"
          onClick={handleNext}
        >
          {isLast ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default MultiStepper;

/**
 * StepIndicator — renders a single step circle + label in the stepper header.
 * Shows active, completed, or pending state based on current progress.
 */
function StepIndicator({
  index = 0,
  title = "",
  isActive = false,
  isCompleted = false,
  isClickable = false,
  onClick,
}) {
  const statusClass = isCompleted
    ? "multi-stepper__indicator--completed"
    : isActive
      ? "multi-stepper__indicator--active"
      : "";

  const Tag = isClickable ? "button" : "div";

  return (
    <Tag
      type={isClickable ? "button" : undefined}
      className={`multi-stepper__indicator ${statusClass} ${isClickable ? "multi-stepper__indicator--clickable" : ""}`}
      onClick={isClickable ? onClick : undefined}
      aria-current={isActive ? "step" : undefined}
    >
      <span className="multi-stepper__circle">
        {isCompleted ? "✓" : index + 1}
      </span>
      <span className="multi-stepper__label">{title}</span>
    </Tag>
  );
}

export default StepIndicator;

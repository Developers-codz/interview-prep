const loader = document.querySelector("#loader")
const container = document.querySelector("#products")

let page = 1
let loading = false

const observer = new IntersectionObserver(entries => {
    const entry = entries[0]
    if(entry.isIntersecting) {
        fetchMoreData()
    }
})

observer.observe(loader)

async function fetchMoreData() {
    if (loading) return;
    loading = true;
    loader.innerText = "Loading.....";
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`,
      );
      const data = await res.json();
      console.log(data);
      renderProducts(data);
      page++;
    } catch (err) {
      console.log(err);
    } finally {
      loading = false;
    }
}

function renderProducts(products = []) {
    products.forEach(product => {
         const card = document.createElement("div");
         card.className = "card";
         card.innerHTML = `
            <h3>${product.title}</h3>
            <p>$${product.body}</p>
            `
        container.appendChild(card)
    })
}

fetchMoreData()

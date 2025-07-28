import { useState, useEffect } from "react";
import FullItem from "../Item";
import ProductLine from "../../../components/products/ProductLine";
import { Link } from "react-router-dom";
import ProductGrid from "../../../components/products/ProductGrid";

const SecondHand = () => {
  const [popularProducts, setPopularProducts] = useState([
    // initial mock data
    { id: "7", category: "men", name: "Black Jacket", price: "1.99" },
    { id: "8", category: "women", name: "White Dress", price: "1.99" },
    { id: "9", category: "child", name: "Colorful Hat", price: "1.99"  },
    { id: "9", category: "child", name: "Colorful Hat2", price: "1.99"  },
    { id: "9", category: "child", name: "Colorful Hat3", price: "1.99"  },
    { id: "9", category: "child", name: "Colorful Hat4", price: "1.99"  },
    { id: "9", category: "child", name: "Colorful Hat5", price: "1.99"  },
    { id: "9", category: "child", name: "Colorful Hat6", price: "1.99"  },
    { id: "9", category: "child", name: "Colorful Hat7", price: "1.99"  },
    { id: "9", category: "child", name: "Colorful Hat8", price: "1.99"  },
    { id: "9", category: "child", name: "Colorful Hat9", price: "1.99"  },
    { id: "9", category: "child", name: "Colorful Hat10", price: "1.99"  },
  ]);

  /*
  // Future: fetch popular products from backend
  useEffect(() => {
    async function fetchPopular() {
      try {
        const res = await fetch('/api/popular-products');
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setPopularProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPopular();
  }, []);
  */

  return (
    <ProductGrid title="Secondhand Items" action={<a href="/productsPage">See all</a>}>
        {popularProducts.map(item => (
            <FullItem key={item.id} item={item}/>
        ))}
    </ProductGrid>
  );
};

export default SecondHand;

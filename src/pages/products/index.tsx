import { Card, List } from "antd";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const data = [
    { id: 1, title: "Product 1" },
    { id: 2, title: "Product 2" },
    { id: 3, title: "Product 3" },
  ];

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Link to={`/products/${item.id}`}>
            <Card hoverable title={item.title}>
              Card content
            </Card>
          </Link>
        </List.Item>
      )}
    />
  );
};

export default ProductsPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.funcGetCategories();
  }

  funcGetCategories = async () => {
    const response = await getCategories();
    this.setState({
      categories: response,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="categories">
        <h3>Categorias:</h3>
        {categories
          .map(({ name, id }) => (
            <Link
              to={ `/category/${id}` }
              data-testid="category"
              key={ id }
            >
              <p>{name}</p>
            </Link>))}
      </div>
    );
  }
}

export default Categories;

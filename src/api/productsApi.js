import { commerce } from "../lib/Commerce";

export const fetchProducts = async page => {
  const response = await commerce.products.list({
    limit: 6,
    page: page,
  });

  return response;
};

export const fetchCategory = async category => {
  const response = await commerce.products.list({
    category_slug: [category],
  });
  return response;
};

export const fetchDetails = async detailsId => {
  const response = commerce.products.retrieve(detailsId);

  return response;
};

export const fetchProduct = async prodId => {
  const response = await commerce.products.retrieve(prodId);

  return response;
};

import axios from 'axios';
import { Bikepost } from '../models/bike';
import { Bike } from '../models/Inventory';
import { registration } from '../models/registration';
import { Rental, rentModel } from '../models/Rent';
import { user } from '../models/user';
import { API_URL } from './ajaxservice';

interface inventory {
  data: Bike[];
  total: number;
}
interface UsersResponse {
  data: user[];
  total: number;
}
interface RentResponse {
  data: Rental[];
  total: number;
}

export async function getCards(
  page?: number,
  pageSize?: number,
  searchText?: string,
  sort?: string
): Promise<inventory> {
  let url = `${API_URL}/bike?sort=rating&name=${searchText}`;

  const response = await axios.get(url);
  const { data, headers } = response;

  // Filter data based on search text
  let filteredData = data;
  if (searchText) {
    filteredData = data.filter((card: { name: string }) =>
      card.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  // Sort data based on sort parameter
  if (sort === 'rating') {
    filteredData.sort((a: Bike, b: Bike) => b.rating - a.rating);
  } else if (sort === 'kmRun') {
    filteredData.sort((a: Bike, b: Bike) => a.kmRun - b.kmRun);
  } else if (sort === 'milage') {
    filteredData.sort((a: Bike, b: Bike) => b.milage - a.milage);
  }

  const total = Number(headers['x-total-count']);
  return { data: filteredData, total };
}

export async function addBike(bike: Bikepost): Promise<Bikepost> {
  const response = await axios.post(`${API_URL}/bike`, bike);
  return response.data;
}
export async function rent(rents: rentModel): Promise<rentModel> {
  const response = await axios.post(`${API_URL}/Rent/rent`, rents);
  return response.data;
}

export const rentBike = async (bikeId: string): Promise<void> => {

  const response = await axios.put(`${API_URL}/bike/${bikeId}/rental-status`);
  console.log(response.data); // Optional: Log the response data
  return response.data;
};

export async function getUsers(page: number, pageSize: number): Promise<UsersResponse> {
  const response = await axios.get(`${API_URL}/user/users`);
  const { data, headers } = response;
  const total = Number(headers['x-total-count']);
  return { data, total };
}

export async function getUser(): Promise<user> {
  const response = await axios.get(`${API_URL}/user/users`);
  return response.data;
}
export async function getRent(page: number, pageSize: number): Promise<RentResponse> {
  const response = await axios.get(`${API_URL}/Rent/rented`);
  const { data, headers } = response;
  const total = Number(headers['x-total-count']);
  return { data, total };
}




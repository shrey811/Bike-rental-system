import axios from 'axios';
import { Bikepost } from '../models/bike';
import { Bike } from '../models/Inventory';
import { registration } from '../models/registration';
import {  Rental, rentModel } from '../models/Rent';
import { user } from '../models/user';
import { API_URL } from './ajaxservice';

interface inventory {
  data: Bike [];
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

// export async function getCards(page?: number, pageSize?: number,searchText?: string): Promise<inventory> {
//   const response = await axios.get(`${API_URL}/bike`);
//   const { data, headers } = response;
//   const total = Number(headers['x-total-count']);
//   return { data, total };
// }

export async function getCards(page?: number, pageSize?: number, searchText?: string): Promise<inventory> {
  const response = await axios.get(`${API_URL}/bike`);
  const { data, headers } = response;
  const total = Number(headers['x-total-count']);
  
  if (searchText) {
    const filteredData = data.filter((card: { name: string; }) =>
      card.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return { data: filteredData, total };
  }
  
  return { data, total };
}

// export async function getCards(page: number, pageSize: number): Promise<inventory> {
//   const response = await axios.get(`${API_URL}/bike`);
//   const { data, headers } = response;
//   const total = Number(headers['x-total-count']);
//   return { data, total };
// }


export async function addBike(bike: Bikepost): Promise<Bikepost> {
  const response = await axios.post(`${API_URL}/bike`, bike);
  return response.data;
}
export async function rent(rents: rentModel): Promise<rentModel> {
  const response = await axios.post(`${API_URL}/Rent/rent`,rents);
  return response.data;
}

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

// export async function getRent(page: number, pageSize: number): Promise<RentResponse> {
//   const response = await axios.get(`${API_URL}/Rent/rent`);
//   const { data, headers } = response;
//   const total = Number(headers['x-total-count']);
//   return { data, total };
// }
// export async function getUsers(): Promise<registration[]> {
//   const response = await axios.get<UsersResponse>(`${API_URL}/users/users`);
//   return response.data.data;
// }


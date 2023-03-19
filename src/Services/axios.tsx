import axios from 'axios';
import { Bike } from '../models/Inventory';
import { registration } from '../models/registration';
import {  Rental } from '../models/Rent';
import { API_URL } from './ajaxservice';

interface inventory {
  data: Bike[];
  total: number;
}
interface UsersResponse {
  data: registration[];
  total: number;
}
interface RentResponse {
  data: Rental[];
  total: number;
}

export async function getCards(page: number, pageSize: number): Promise<inventory> {
  const response = await axios.get(`${API_URL}/bike`);
  const { data, headers } = response;
  const total = Number(headers['x-total-count']);
  return { data, total };
}

// export async function getCards(page: number, pageSize: number): Promise<inventory> {
//   const response = await axios.get(`${API_URL}/bike`);
//   const { data, headers } = response;
//   const total = Number(headers['x-total-count']);
//   return { data, total };
// }


export async function addBike(bike: Bike): Promise<Bike> {
  const response = await axios.post(`${API_URL}/bike`, bike);
  return response.data;
}

export async function getUsers(page: number, pageSize: number): Promise<UsersResponse> {
  const response = await axios.get(`${API_URL}/user/users`);
  const { data, headers } = response;
  const total = Number(headers['x-total-count']);
  return { data, total };
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


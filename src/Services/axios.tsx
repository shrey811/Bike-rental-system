
import axios from 'axios';
import { Bike } from '../models/Inventory';

interface inventory {
    data: Bike[];
    total: number;
  }
  
  export async function getCards(page: number, pageSize: number): Promise<inventory> {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${pageSize}`);
    const { data, headers } = response;
    const total = Number(headers['x-total-count']);
    return { data, total };
  }
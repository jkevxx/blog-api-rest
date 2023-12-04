import request from 'supertest';
import { app, server } from '../app';
const apiUrl = '/api/v1';

// first mock implementation
import { createItem, getListItems } from '../services/item.service';
jest.mock('../services/item.service');

// second mock implementation
// import { getListItems } from '../services/item.service';
// jest.mock('../services/item.service');
// const mockFunction = jest.fn();

const fakeItems = [
  {
    _id: '1',
    name: 'item1',
  },
];

// const ListItemsStub = {
//   getListItems: () => [...fakeItems],
// };

// mockFunction.mockImplementation(() => {});

// beforeEach(() => {
//   getListItems.mockResolvedValue([]);
// })

describe('GET /items', () => {
  test('should return 200', async () => {
    const response = await request(app).get(`${apiUrl}/items`);
    expect(response.status).toBe(200);
  });

  test('should return an array of items', async () => {
    // first mock implementation
    (getListItems as jest.Mock).mockResolvedValue(fakeItems);
    const response = await request(app).get(`${apiUrl}/items`);

    console.log(response.body);

    expect(response.body.length).toEqual(1);
  });
});

describe('POST /items', () => {
  test('should return 201', async () => {
    (createItem as jest.Mock).mockResolvedValue({ message: 'ITEM CREATED' });
    const response = await request(app).post(`${apiUrl}/items`).send({
      name: 'item1',
    });

    console.log(response.statusCode);
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe('ITEM CREATED');
  });
});

afterAll(async () => {
  await server.close();
});

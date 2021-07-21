
interface IResource {
  url: string;
}

interface ICardsDTO {
  id: string;
  category: string;
  tags: string[];
  resources: IResource[];
}

interface ICreateCardDTO {
  category: string;
  tags: string[];
  resources: IResource[];
}

interface IUpdateCardDTO {
  category: string;
  tags: string[];
  resources: IResource[];
}

interface ICardsApi {
  getAll() : Promise<ICardsDTO[]>
  createOne(data: ICreateCardDTO) : Promise<void>
  updateOne(id: string, data: IUpdateCardDTO) : Promise<void>
}


export class InMemoryCardsApi implements ICardsApi {
  fakeCards: ICardsDTO[] = [
    {
      id: "1",
      category: "Category 1",
      tags: ["software", "ddd", "tdd"],
      resources: [{ url: "https://youtube.com/?v=someYoutubeVideo" }],
    },
    {
      id: "2",
      category: "Category 2",
      tags: ["software", "ddd", "tdd"],
      resources: [{ url: "https://youtube.com/?v=someYoutubeVideo" }],
    },
  ];

  constructor() {
    const cardsString = localStorage.getItem('cards');

    if (cardsString)
      this.fakeCards = JSON.parse(cardsString);
  }

  getAll = (): Promise<ICardsDTO[]> => Promise.resolve(this.fakeCards);

  createOne = (data: ICreateCardDTO): Promise<void> => {
    this.fakeCards.push({ ...data, id: Date.now().toString() });
    localStorage.setItem('cards', JSON.stringify(this.fakeCards));
    return Promise.resolve();
  }

  updateOne = (id: string, data: IUpdateCardDTO): Promise<void> => {
    const index = this.fakeCards.findIndex((c) => c.id === id);

    if (index === -1)
      return Promise.reject(new Error("Invalid ID, card doesn't exist"));

    const item = this.fakeCards[index];
    const updatedItem = {...item, ...data };

    this.fakeCards[index] = updatedItem;

    localStorage.setItem('cards', JSON.stringify(this.fakeCards));
    return Promise.resolve();
  }
}

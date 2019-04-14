import { ISPList } from './HelloWorldWebPart';

export default class todoList  {

    private static _items: ISPList[] = [{ Title: 'Brush teeth', Id: '1' },
                                        { Title: 'Clean room', Id: '2' },
                                        { Title: 'Walk the dog', Id: '3' },
                                        { Title: 'Watch tv', Id: '4' },
                                        { Title: 'Do technical assessment', Id: '5' }];
    
    public static get(): Promise<ISPList[]> {
    return new Promise<ISPList[]>((resolve) => {
            resolve(todoList._items);
        });
    }
}
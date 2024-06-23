interface Dialog {
    id: string;
    name: string;
    avatarUrl: string;
}

interface Message {
    id: string;
    dialogId: string;
    message: string;
}

interface DialogsState {
    dialogsData: Dialog[];
    messageData: Message[];
    newMessageAdd: string;
    activeDialogId: string | null; // Добавлено поле для активного диалога
}

interface Action {
    type: string;
    textmess?: string;
    dialogId?: string;
}

const initialState: DialogsState = {
    dialogsData: [
        { id: '1', name: 'Kubik', avatarUrl: 'https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg' },
        { id: '2', name: 'Czubi', avatarUrl: 'https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/19/60af144800120-bpfull.jpg' },
        { id: '3', name: 'Burulka', avatarUrl: 'https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/26/60af431b91a0a-bpfull.jpg' },
        { id: '4', name: 'Bobik', avatarUrl: 'https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg' }
    ],
    messageData: [
        { id: '1', dialogId: '1', message: 'HI' },
        { id: '2', dialogId: '1', message: 'How are you' },
        { id: '3', dialogId: '2', message: 'Yoooo' },
        { id: '4', dialogId: '2', message: 'Yoooo' }
    ],
    newMessageAdd: '',
    activeDialogId: null // Изначально диалог не выбран
};

// Экшн-криэйторы
export const updateNewMessageActionCreator = (text: string) => ({
    type: 'UPDATE_NEW_MESSAGE_TEXT',
    textmess: text
});

export const addMessageActionCreator = () => ({
    type: 'ADD_MESSAGE'
});

export const setActiveDialogActionCreator = (dialogId: string) => ({
    type: 'SET_ACTIVE_DIALOG',
    dialogId
});

// Редуктор
const dialogsReducer = (state: DialogsState = initialState, action: Action) => {
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_TEXT':
            return {
                ...state,
                newMessageAdd: action.textmess ?? ''
            };
        case 'ADD_MESSAGE':
            const newMessage = {
                id: (state.messageData.length + 1).toString(),
                dialogId: state.activeDialogId!,
                message: state.newMessageAdd
            };
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
                newMessageAdd: ''
            };
        case 'SET_ACTIVE_DIALOG':
            return {
                ...state,
                activeDialogId: action.dialogId ?? null
            };
        default:
            return state;
    }
};

export default dialogsReducer;

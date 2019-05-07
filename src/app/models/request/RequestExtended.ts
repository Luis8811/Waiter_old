import {FactRequest} from '../request/FactRequest';
import {Request} from '../request/Request';
import {Client} from '../client/Client';
export class RequestExtended {
    _id: string;
    date: string;
    time: string;
    client_id: Client;
    request_id: Request;
    state: string;
}


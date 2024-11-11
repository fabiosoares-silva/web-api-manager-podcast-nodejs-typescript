import {IncomingMessage, ServerResponse} from 'http';
import {serviceListEpisodes} from '../services/list-episodes-service';
import {serviceFilterEpisodes} from '../services/filter-episodes-service';
import {ContentType} from '../utils/content-type';
import {FilterPodcastModel} from '../models/filter-podcast-model';

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const content = await serviceListEpisodes();

    response.writeHead(200, {'Content-Type': ContentType.JSON});
    response.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const content: FilterPodcastModel = await serviceFilterEpisodes(request.url);

    response.writeHead(content.statusCode, {'Content-Type': ContentType.JSON});
    response.end(JSON.stringify(content.body));
};

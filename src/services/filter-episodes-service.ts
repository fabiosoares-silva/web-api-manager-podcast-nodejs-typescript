import {repositoryPodcast} from '../repositories/podcasts-repository';
import {FilterPodcastModel} from '../models/filter-podcast-model';
import {StatusCode} from '../utils/status-code';

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<FilterPodcastModel> => {
    //buscando os dados
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: []
    };

    const queryString = podcastName?.split('?p=')[1] || '';
    const data = await repositoryPodcast(queryString);

    //verifico se tem conteúdo
    if (data.length !== 0) {
        responseFormat.statusCode = StatusCode.OK;
    } else {
        responseFormat.statusCode = StatusCode.NoContent;
    }

    responseFormat.body = data;

    return responseFormat;
};

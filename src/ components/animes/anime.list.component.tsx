import React from 'react';

import { Anime } from '../../common/interfaces/anime.interface';
import AnimeCard from './anime-card/anime.card.component';

interface AnimeListProps {
    animes: Anime[]
}

const PostsGrid: React.FC<AnimeListProps> = ({ animes }: AnimeListProps) => {
    return (
        <div className="row">
            {animes.map(anime => (
                    <div className="col-12 col-md-4 mb-4" key={anime.id}>
                        <AnimeCard anime={anime} />
                    </div>
                ))}
        </div>
    );
}

export default PostsGrid;
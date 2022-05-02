import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { FavoritePokemons } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui';
import localFavorites from '../../utils/localFavorites';

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemon(localFavorites.pokemons);
  }, []);

  return (
    <Layout title="Pokemones Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;

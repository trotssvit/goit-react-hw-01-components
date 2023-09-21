import { GlobalStyle } from './GlobalStyles.js';
import { Information } from './Information/Information';
import { Profile } from './Profile/Profile';
import user from './user.json';

export const App = () => {
  return (
    <div>
      <div>
        <GlobalStyle />
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
        />
      </div>
      <div>
        <Information stats={user.stats} />
      </div>
    </div>
  );
};

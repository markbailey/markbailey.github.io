import { ReactComponent as Logo } from './assets/logo.svg';
import scss from './assets/stylesheets/app.module.scss';

function App() {
  return (
    <div className={scss.app}>
      <Logo data-animate="true" className={scss.logo} />
      <h1 className={scss.name}>
        <span>{'Mark'}</span>
        {'Bailey'}
      </h1>
      <span className={scss.slogan}>More than a code monkey</span>
    </div>
  );
}

export default App;

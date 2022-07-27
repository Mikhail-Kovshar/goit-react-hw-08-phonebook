import s from './HomeView.module.css';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors'

export default function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (isLoggedIn) {
     return (
    <>
      <section className={s.hero}>
     
        <button className={s.heroButton}>
          <NavLink to="/addcontact">Додати контакт</NavLink>
        </button>
        <button className={s.heroButton}>
          <NavLink to="/viewcontact">Всі контакти</NavLink>
        </button>
      </section>
    </>
  );
}
else{
  return (
    <>
      <section className={s.hero}>
    
       <p className={s.text}>
        Для користування  <NavLink className={s.link} to="/login"> увійди &nbsp;</NavLink> 
         або   <NavLink className={s.link} to="/register">зареєструйся</NavLink>!
       </p>
      </section>
    </>
  );
}
}
import { useContext, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Context } from '../../App';
import { differencesDays } from '../../helpers';

import styles from './CardRoom.module.css';

function CardRoom({ rooms, variant = 'defualt' }) {
  const { roomsData } = useContext(Context);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(roomsData.lang);
  }, []);

  function handleClickBookCTA(e) {
    e.preventDefault();
    const indexRoom = e.target.dataset.ctaRoom;
    const selectedRoomBooked = rooms[indexRoom];
    sessionStorage.setItem(
      'selectedRoomBooked',
      JSON.stringify({
        kitchen: selectedRoomBooked?.kitchen,
        nights: differencesDays(
          roomsData?.selectedDate[0],
          roomsData?.selectedDate[1]
        ),
        arrival: roomsData?.selectedDate[0],
        departure: roomsData?.selectedDate[1],
      })
    );
    window.location.href = e.target.href;
  }

  return (
    <div
      className={
        variant == 'book'
          ? `${
              rooms.length > 1
                ? styles['carrousel-swipe']
                : styles['carrousel-swipe-one-item']
            }`
          : null
      }
    >
      {rooms?.map((room, index) => {
        return (
          <div key={crypto.randomUUID()}>
            <div className={styles['room-card-wrapper']}>
              <div className={styles['room-card']}>
                <div className={styles['room-card-number']}>
                  <span>{room?.name?.split(' ')[1]?.slice(1)}</span>
                </div>
                <h3 className={styles['room-card-heading']}>{t('Room')}</h3>
                <div className={styles['room-card-body']}>
                  <div className={styles['room-card-illustration']}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 168.21 168.21"
                    >
                      <g id="Capa_2" data-name="Capa 2">
                        <g id="WEB_DISEÑO" data-name="WEB DISEÑO">
                          <path
                            className={styles['cls-1']}
                            d="M135,168.21H33.25A33,33,0,0,1,0,135.83v-.14c0-.2,0-.46,0-.72V33.25A33.29,33.29,0,0,1,33.25,0H135a33.29,33.29,0,0,1,33.25,33.25V135c0,.26,0,.52,0,.78A33,33,0,0,1,135,168.21ZM33.25,3A30.28,30.28,0,0,0,3,33.25V135c0,.22,0,.44,0,.66v.16a30.06,30.06,0,0,0,30.24,29.42H135a30.05,30.05,0,0,0,30.24-29.46v-.12c0-.22,0-.44,0-.66V33.25A30.28,30.28,0,0,0,135,3Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M1.51,137.24A1.46,1.46,0,0,1,0,135.79v-.1a1.5,1.5,0,0,1,3,0A1.54,1.54,0,0,1,1.51,137.24Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M135,168.21H33.25A33.28,33.28,0,0,1,0,135V33.25A33.29,33.29,0,0,1,33.25,0H135a33.29,33.29,0,0,1,33.25,33.25V135A33.28,33.28,0,0,1,135,168.21ZM33.25,3A30.28,30.28,0,0,0,3,33.25V135a30.28,30.28,0,0,0,30.25,30.24H135A30.28,30.28,0,0,0,165.21,135V33.25A30.28,30.28,0,0,0,135,3Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M67.13,106.42a1.5,1.5,0,0,1-1.5-1.5V1.5a1.5,1.5,0,0,1,3,0V104.92A1.5,1.5,0,0,1,67.13,106.42Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M137.43,112.94a1.5,1.5,0,0,1-1.5-1.5V1.5a1.5,1.5,0,0,1,3,0V111.44A1.5,1.5,0,0,1,137.43,112.94Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M32.24,99.9a1.5,1.5,0,0,1-1.5-1.5V1.5a1.5,1.5,0,0,1,3,0V98.4A1.5,1.5,0,0,1,32.24,99.9Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M20.67,71.05a1.5,1.5,0,0,1-1.5-1.5V4.09a1.5,1.5,0,0,1,3,0V69.55A1.5,1.5,0,0,1,20.67,71.05Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M52.24,128.85l-51-8.56a1.5,1.5,0,0,1,.5-3L52,125.77,103.83,110a1.5,1.5,0,1,1,.87,2.87Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M1.61,120.4a1.5,1.5,0,0,1-.43-2.93l52.13-15.88a1.5,1.5,0,1,1,.87,2.87L2.05,120.34A1.61,1.61,0,0,1,1.61,120.4Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M1.5,109.26a1.5,1.5,0,0,1-.44-2.94L31.8,97a1.5,1.5,0,0,1,.87,2.87L1.94,109.19A1.39,1.39,0,0,1,1.5,109.26Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M1.5,98A1.5,1.5,0,0,1,1.13,95l30.73-7.94A1.5,1.5,0,0,1,32.61,90L1.88,97.91A1.28,1.28,0,0,1,1.5,98Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M3.2,75.39a1.5,1.5,0,0,1-.36-3L20.31,68.1A1.5,1.5,0,1,1,21,71L3.56,75.34A1.12,1.12,0,0,1,3.2,75.39Z"
                          />
                          <line
                            className={styles['cls-2']}
                            x1="65.05"
                            y1="11.71"
                            x2="34.32"
                            y2="3.77"
                          />
                          <line
                            className={styles['cls-2']}
                            x1="65.05"
                            y1="22.31"
                            x2="34.32"
                            y2="14.37"
                          />
                          <line
                            className={styles['cls-2']}
                            x1="65.05"
                            y1="32.9"
                            x2="34.32"
                            y2="24.96"
                          />
                          <line
                            className={styles['cls-2']}
                            x1="65.05"
                            y1="43.49"
                            x2="34.32"
                            y2="35.56"
                          />
                          <line
                            className={styles['cls-2']}
                            x1="65.05"
                            y1="54.09"
                            x2="34.32"
                            y2="46.15"
                          />
                          <line
                            className={styles['cls-2']}
                            x1="65.05"
                            y1="64.68"
                            x2="34.32"
                            y2="56.74"
                          />
                          <line
                            className={styles['cls-2']}
                            x1="65.05"
                            y1="75.27"
                            x2="34.32"
                            y2="67.34"
                          />
                          <line
                            className={styles['cls-2']}
                            x1="65.05"
                            y1="85.87"
                            x2="34.32"
                            y2="77.93"
                          />
                          <line
                            className={styles['cls-2']}
                            x1="65.05"
                            y1="96.46"
                            x2="34.32"
                            y2="88.52"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M138.46,5.27A1.48,1.48,0,0,1,137,4.15a1.5,1.5,0,0,1,1.07-1.83l4.68-1.21A1.5,1.5,0,0,1,143.51,4l-4.68,1.21A1.55,1.55,0,0,1,138.46,5.27Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M138.46,16a1.5,1.5,0,0,1-.38-2.95L156,8.38a1.5,1.5,0,0,1,.76,2.91L138.84,16A1.73,1.73,0,0,1,138.46,16Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M138.46,26.76a1.5,1.5,0,0,1-.38-3l24.74-6.52a1.49,1.49,0,0,1,1.83,1.06,1.51,1.51,0,0,1-1.07,1.84l-24.74,6.52A1.28,1.28,0,0,1,138.46,26.76Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M138.46,37.5a1.5,1.5,0,0,1-.39-3L166,27.12a1.5,1.5,0,1,1,.77,2.89l-27.9,7.44A1.31,1.31,0,0,1,138.46,37.5Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M138.46,48.25a1.5,1.5,0,0,1-.39-3l28.25-7.61a1.5,1.5,0,1,1,.78,2.89L138.85,48.2A1.74,1.74,0,0,1,138.46,48.25Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M138.46,59a1.5,1.5,0,0,1-.4-3l28.26-7.69a1.5,1.5,0,0,1,.79,2.89l-28.26,7.7A1.74,1.74,0,0,1,138.46,59Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M138.46,69.73a1.5,1.5,0,0,1-.4-2.94L166.31,59a1.5,1.5,0,1,1,.8,2.89l-28.25,7.78A1.41,1.41,0,0,1,138.46,69.73Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M138.46,80.48a1.5,1.5,0,0,1-.4-3L166,69.76a1.5,1.5,0,0,1,.8,2.89l-27.91,7.77A1.39,1.39,0,0,1,138.46,80.48Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M138.46,91.22a1.5,1.5,0,0,1-.41-2.94L166,80.42a1.5,1.5,0,0,1,.81,2.89l-27.91,7.85A1.39,1.39,0,0,1,138.46,91.22Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M138.46,102a1.5,1.5,0,0,1-.41-2.94l28.25-8a1.5,1.5,0,0,1,.82,2.89l-28.25,8A1.48,1.48,0,0,1,138.46,102Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M138.46,112.71a1.5,1.5,0,0,1-.42-2.94l28.26-8.13a1.5,1.5,0,0,1,.83,2.88l-28.26,8.13A1.45,1.45,0,0,1,138.46,112.71Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M104.27,112.47l-.25,0-72-12.1a1.5,1.5,0,0,1,.49-3l72,12.1a1.5,1.5,0,0,1-.25,3Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M52.24,136.79l-51-8.57A1.49,1.49,0,0,1,0,126.5a1.5,1.5,0,0,1,1.73-1.23L52,133.71l51.79-15.77a1.5,1.5,0,1,1,.87,2.87Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M27.06,167.61a1.5,1.5,0,0,1-.45-2.93l77.21-24.06a1.5,1.5,0,1,1,.89,2.86l-77.2,24.06A1.41,1.41,0,0,1,27.06,167.61Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M156.47,159.82a1.41,1.41,0,0,1-.45-.07l-52.2-16.27a1.5,1.5,0,0,1,.89-2.86l52.2,16.27a1.5,1.5,0,0,1-.44,2.93Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M72.43,168.21a1.5,1.5,0,0,1-.45-2.93l31.84-9.92a1.5,1.5,0,1,1,.89,2.86l-31.84,9.93A1.72,1.72,0,0,1,72.43,168.21Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M136.11,168.21a1.74,1.74,0,0,1-.45-.06l-31.84-9.93a1.5,1.5,0,0,1,.89-2.86l31.84,9.92a1.5,1.5,0,0,1-.44,2.93Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M52.14,158.29a1.5,1.5,0,0,1-1.5-1.5V140.07a1.5,1.5,0,0,1,3,0v16.72A1.5,1.5,0,0,1,52.14,158.29Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M32.24,143.55a1.5,1.5,0,0,1-1.5-1.5v-8.36a1.5,1.5,0,1,1,3,0v8.36A1.5,1.5,0,0,1,32.24,143.55Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M104.27,143.55a1.5,1.5,0,0,1-1.5-1.5V125.33a1.5,1.5,0,0,1,3,0v16.72A1.5,1.5,0,0,1,104.27,143.55Z"
                          />
                          <path
                            className={styles['cls-2']}
                            d="M67.13,65.24s34,37.65,70.3,3.35"
                          />
                          <path
                            className={styles['cls-2']}
                            d="M67.13,66.39s34,52.73,70.3,3.51"
                          />
                          <path
                            className={styles['cls-2']}
                            d="M67.13,67.54s34,67.82,70.3,3.67"
                          />
                          <polyline
                            className={styles['cls-2']}
                            points="118.79 146.48 118.79 112.1 166.37 112.1"
                          />
                          <polyline
                            className={styles['cls-2']}
                            points="127.62 149.04 127.62 119.38 166.37 119.38"
                          />
                          <polyline
                            className={styles['cls-2']}
                            points="136.44 151.59 136.44 126.65 166.37 126.65"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M67.13,3H32.24a1.5,1.5,0,0,1,0-3H67.13a1.5,1.5,0,0,1,0,3Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M32.24,111.06a1.65,1.65,0,0,1-.38,0l-18-4.64a1.5,1.5,0,0,1-1.07-1.83,1.49,1.49,0,0,1,1.82-1.07l18,4.64a1.5,1.5,0,0,1-.37,3Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M102.28,16A13.47,13.47,0,0,1,88.83,2.57a1.5,1.5,0,1,1,3,0,10.45,10.45,0,1,0,20.9,0,1.5,1.5,0,1,1,3,0A13.47,13.47,0,0,1,102.28,16Z"
                          />
                          <path
                            className={styles['cls-2']}
                            d="M128.13,53.47a12,12,0,0,0-23.83,1.87"
                          />
                          <path
                            className={styles['cls-2']}
                            d="M116.2,53.47c-.26-6.58-3.14-11.5-6.43-11s-5.74,6.27-5.49,12.85"
                          />
                          <path
                            className={styles['cls-2']}
                            d="M104.26,53.47v1.87"
                          />
                          <path
                            className={styles['cls-2']}
                            d="M92.33,53.47c.26-6.58,3.13-11.5,6.42-11s5.75,6.27,5.49,12.85"
                          />
                          <path
                            className={styles['cls-2']}
                            d="M80.39,53.47a12,12,0,1,1,23.83,1.87"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M102.28,23.5A20.55,20.55,0,0,1,81.75,3a1.5,1.5,0,1,1,3,0,17.53,17.53,0,0,0,35.06,0,1.5,1.5,0,1,1,3,0A20.55,20.55,0,0,1,102.28,23.5Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M104.27,111.68a1.5,1.5,0,0,1-1.5-1.5v-5.26a1.5,1.5,0,0,1,3,0v5.26A1.5,1.5,0,0,1,104.27,111.68Z"
                          />
                          <path
                            className={styles['cls-1']}
                            d="M104.27,78.73a1.5,1.5,0,0,1-1.5-1.5V55.34a1.5,1.5,0,0,1,3,0V77.23A1.5,1.5,0,0,1,104.27,78.73Z"
                          />
                          <line
                            className={styles['cls-2']}
                            x1="25.37"
                            y1="164.68"
                            x2="25.37"
                            y2="143.48"
                          />
                          <path
                            className={styles['cls-2']}
                            d="M25.37,164.68c.23-5.08,2.75-16.68,6.87-16.88"
                          />
                          <path
                            className={styles['cls-2']}
                            d="M25.37,164.68c.46-10.15,5.51-12.17,13.74-12.57"
                          />
                          <line
                            className={styles['cls-2']}
                            x1="25.37"
                            y1="164.68"
                            x2="25.37"
                            y2="143.48"
                          />
                          <path
                            className={styles['cls-2']}
                            d="M25.37,164.68c-.24-5.08-2.76-16.68-6.88-16.88"
                          />
                          <path
                            className={styles['cls-2']}
                            d="M25.37,164.68c-.47-10.15-5.52-12.17-13.75-12.57"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <ul className={styles['room-card-features']}>
                    <li className={`${styles['max']}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 26.72 20.17"
                      >
                        <g id="Capa_2" data-name="Capa 2">
                          <g id="WEB_DISEÑO" data-name="WEB DISEÑO">
                            <path
                              className={styles['cls-1']}
                              d="M7.43,8.53a3.18,3.18,0,1,1,3.18-3.19A3.19,3.19,0,0,1,7.43,8.53Zm0-3.36a.18.18,0,0,0-.18.17c0,.2.36.2.36,0A.18.18,0,0,0,7.43,5.17Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M19.29,6.36a3.18,3.18,0,1,1,3.18-3.18A3.19,3.19,0,0,1,19.29,6.36Zm0-3.36a.18.18,0,0,0-.18.18c0,.2.36.2.36,0A.18.18,0,0,0,19.29,3Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M25.22,18a1.5,1.5,0,0,1-1.5-1.5,4.43,4.43,0,0,0-8.86,0,1.5,1.5,0,0,1-3,0,7.43,7.43,0,0,1,14.86,0A1.5,1.5,0,0,1,25.22,18Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M13.36,20.17a1.5,1.5,0,0,1-1.5-1.5,4.43,4.43,0,0,0-8.86,0,1.5,1.5,0,0,1-3,0,7.43,7.43,0,0,1,14.86,0A1.5,1.5,0,0,1,13.36,20.17Z"
                            />
                          </g>
                        </g>
                      </svg>
                      <h4>
                        Max
                        <span>{room['max-persons']}</span>
                      </h4>
                    </li>
                    <li className={`${styles['air-conditioner']}`}>
                      <svg
                        className={styles['fan']}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25.77 25.77"
                      >
                        <g id="Capa_2" data-name="Capa 2">
                          <g id="WEB_DISEÑO" data-name="WEB DISEÑO">
                            <circle
                              className={styles['cls-1']}
                              cx="12.88"
                              cy="12.88"
                              r="1.78"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M12.88,25.77A12.89,12.89,0,1,1,25.77,12.88,12.9,12.9,0,0,1,12.88,25.77ZM12.88,2A10.89,10.89,0,1,0,23.77,12.88,10.89,10.89,0,0,0,12.88,2Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M10.73,11a2.2,2.2,0,0,0-.92-1.45,14.57,14.57,0,0,1-1.75-1.2A2.74,2.74,0,0,1,7.41,5a2.93,2.93,0,0,1,3.16-1.55A4.18,4.18,0,0,1,13.84,5.5s1.3,1.64.34,4.73A2.58,2.58,0,0,0,10.73,11Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M12.34,15.59a2.18,2.18,0,0,0-.8,1.53,14.25,14.25,0,0,1-.16,2.11,2.74,2.74,0,0,1-2.55,2.23,2.94,2.94,0,0,1-2.93-2,4.16,4.16,0,0,1,.15-3.86s.76-2,3.92-2.66A2.57,2.57,0,0,0,12.34,15.59Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M15.58,11.91a2.22,2.22,0,0,0,1.72-.06,16.09,16.09,0,0,1,1.92-.91,2.74,2.74,0,0,1,3.2,1.12,3,3,0,0,1-.26,3.52,4.17,4.17,0,0,1-3.44,1.77s-2.06.3-4.24-2.09A2.57,2.57,0,0,0,15.58,11.91Z"
                            />
                          </g>
                        </g>
                      </svg>
                      <h4>{t('Fan')}</h4>
                    </li>
                    <li className={`${styles['refrigerator']}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 19.72 24.77"
                      >
                        <g id="Capa_2" data-name="Capa 2">
                          <g id="WEB_DISEÑO" data-name="WEB DISEÑO">
                            <path
                              className={styles['cls-1']}
                              d="M17,24.77H2.69A2.7,2.7,0,0,1,0,22.08V2.68A2.69,2.69,0,0,1,2.69,0H17a2.68,2.68,0,0,1,2.68,2.68v19.4A2.69,2.69,0,0,1,17,24.77ZM2.69,1A1.69,1.69,0,0,0,1,2.68v19.4a1.69,1.69,0,0,0,1.69,1.69H17a1.69,1.69,0,0,0,1.68-1.69V2.68A1.68,1.68,0,0,0,17,1Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M4.54,8A1.42,1.42,0,0,1,3.13,6.56V4.7A1.42,1.42,0,1,1,6,4.7V6.56A1.42,1.42,0,0,1,4.54,8Zm0-3.7a.42.42,0,0,0-.41.42V6.56A.42.42,0,0,0,4.54,7,.42.42,0,0,0,5,6.56V4.7A.42.42,0,0,0,4.54,4.28Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M4.54,17.41A1.41,1.41,0,0,1,3.13,16V13.3A1.42,1.42,0,1,1,6,13.3V16A1.41,1.41,0,0,1,4.54,17.41Zm0-4.53a.42.42,0,0,0-.41.42V16A.42.42,0,0,0,5,16V13.3A.42.42,0,0,0,4.54,12.88Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M19.22,22.39H.5a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H19.22a.5.5,0,0,1,.5.5A.5.5,0,0,1,19.22,22.39Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M19.22,10.53H.5A.5.5,0,0,1,0,10a.5.5,0,0,1,.5-.5H19.22a.5.5,0,0,1,.5.5A.5.5,0,0,1,19.22,10.53Z"
                            />
                          </g>
                        </g>
                      </svg>
                      <h4>{t('Refrigerator')}</h4>
                    </li>
                    <li className={`${styles['bathroom']}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 15.04 25.87"
                      >
                        <g id="Capa_2" data-name="Capa 2">
                          <g id="WEB_DISEÑO" data-name="WEB DISEÑO">
                            <path
                              className={styles['cls-1']}
                              d="M13.54,16.45A1.5,1.5,0,0,1,12,15V6A3,3,0,1,0,6,6,1.5,1.5,0,0,1,3,6,6,6,0,1,1,15,6V15A1.5,1.5,0,0,1,13.54,16.45Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M13.54,25.87a1.5,1.5,0,0,1-1.5-1.5V15a1.5,1.5,0,0,1,3,0v9.42A1.5,1.5,0,0,1,13.54,25.87Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M3.55,10.05c-.17.35-.41.66-.58,1a1.47,1.47,0,0,0-.12,1.12,1.2,1.2,0,0,0,.39.5,1.34,1.34,0,0,0,1.58.11,1.45,1.45,0,0,0,.53-1.16,3.78,3.78,0,0,0-.29-1.28c-.18-.47-.37-.93-.59-1.38,0-.08-.07-.18-.15-.21a.25.25,0,0,0-.19,0,.78.78,0,0,0-.29.48A6.74,6.74,0,0,1,3.55,10.05Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M.79,13.57c-.17.36-.42.67-.59,1a1.46,1.46,0,0,0-.13,1.15,1.28,1.28,0,0,0,.4.52,1.4,1.4,0,0,0,1.63.11,1.52,1.52,0,0,0,.54-1.19,3.74,3.74,0,0,0-.3-1.32c-.19-.48-.38-1-.6-1.42,0-.08-.07-.18-.16-.22a.21.21,0,0,0-.19,0,.75.75,0,0,0-.3.49A7.87,7.87,0,0,1,.79,13.57Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M6.11,13.43c-.16.35-.4.66-.57,1a1.43,1.43,0,0,0-.13,1.12,1.28,1.28,0,0,0,.39.5,1.37,1.37,0,0,0,1.59.11A1.44,1.44,0,0,0,7.91,15a3.56,3.56,0,0,0-.29-1.28c-.18-.47-.37-.93-.58-1.39,0-.07-.07-.17-.16-.2a.26.26,0,0,0-.19,0,.83.83,0,0,0-.29.48A4.3,4.3,0,0,1,6.11,13.43Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M1.05,8A3.46,3.46,0,0,1,8,8.23Z"
                            />
                          </g>
                        </g>
                      </svg>
                      <h4
                        dangerouslySetInnerHTML={{
                          __html: t('Private bathroom'),
                        }}
                      ></h4>
                    </li>
                    {room['kitchen'] && (
                      <li className={`${styles['kitchen']}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 19.72 24.77"
                        >
                          <g id="Capa_2" data-name="Capa 2">
                            <g id="WEB_DISEÑO" data-name="WEB DISEÑO">
                              <path
                                className={styles['cls-1']}
                                d="M17,24.77H2.68A2.69,2.69,0,0,1,0,22.08V2.68A2.68,2.68,0,0,1,2.68,0H17a2.68,2.68,0,0,1,2.68,2.68v19.4A2.69,2.69,0,0,1,17,24.77ZM2.68,1A1.69,1.69,0,0,0,1,2.68v19.4a1.69,1.69,0,0,0,1.68,1.69H17a1.69,1.69,0,0,0,1.68-1.69V2.68A1.68,1.68,0,0,0,17,1Z"
                              />
                              <path
                                className={styles['cls-1']}
                                d="M15,19.54h-10a1.33,1.33,0,0,1-1.33-1.33V12.12a1.34,1.34,0,0,1,1.33-1.33H15a1.34,1.34,0,0,1,1.33,1.33v6.09A1.33,1.33,0,0,1,15,19.54Zm-10-7.75a.33.33,0,0,0-.33.33v6.09a.33.33,0,0,0,.33.33H15a.33.33,0,0,0,.33-.33V12.12a.33.33,0,0,0-.33-.33Z"
                              />
                              <path
                                className={styles['cls-1']}
                                d="M16.44,11.79H3.49A1.29,1.29,0,0,1,2.2,10.5v-.25A1.29,1.29,0,0,1,3.49,9h13a1.29,1.29,0,0,1,1.29,1.29v.25A1.29,1.29,0,0,1,16.44,11.79ZM3.49,10a.29.29,0,0,0-.29.29v.25a.28.28,0,0,0,.29.29h13a.28.28,0,0,0,.29-.29v-.25a.29.29,0,0,0-.29-.29Z"
                              />
                              <circle
                                className={styles['cls-1']}
                                cx="2.94"
                                cy="3.26"
                                r="1.17"
                              />
                              <circle
                                className={styles['cls-1']}
                                cx="7.41"
                                cy="3.26"
                                r="1.17"
                              />
                              <circle
                                className={styles['cls-1']}
                                cx="10.54"
                                cy="3.26"
                                r="1.17"
                              />
                              <circle
                                className={styles['cls-1']}
                                cx="13.58"
                                cy="3.26"
                                r="1.17"
                              />
                              <circle
                                className={styles['cls-1']}
                                cx="16.67"
                                cy="3.26"
                                r="1.17"
                              />
                              <path
                                className={styles['cls-1']}
                                d="M19.22,22.39H.5a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H19.22a.5.5,0,0,1,.5.5A.5.5,0,0,1,19.22,22.39Z"
                              />
                              <path
                                className={styles['cls-1']}
                                d="M19.22,6.18H.5a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H19.22a.5.5,0,0,1,.5.5A.5.5,0,0,1,19.22,6.18Z"
                              />
                            </g>
                          </g>
                        </svg>
                        <h4>{t('Kitchen')}</h4>
                      </li>
                    )}
                    {room['air-Conditioner'] && (
                      <li className={`${styles['Wifi']}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 25.31 20.15"
                        >
                          <g id="Capa_2" data-name="Capa 2">
                            <g id="WEB_DISEÑO" data-name="WEB DISEÑO">
                              <rect
                                className={styles['cls-1']}
                                x="1"
                                y="1"
                                width="22.98"
                                height="8.77"
                                rx="3.47"
                              />
                              <line
                                className={styles['cls-2']}
                                x1="4.25"
                                y1="6.47"
                                x2="20.74"
                                y2="6.47"
                              />
                              <path
                                className={styles['cls-1']}
                                d="M19.64,12.34c-.26,2.65.6,4.38,2.81,5.06"
                              />
                              <path
                                className={styles['cls-1']}
                                d="M16.06,12.34c-.12,2.65.31,4.38,1.41,5.06"
                              />
                              <path
                                className={styles['cls-1']}
                                d="M12.49,12.34V17.4"
                              />
                              <path
                                className={styles['cls-1']}
                                d="M8.92,12.34C9,15,8.61,16.72,7.51,17.4"
                              />
                              <path
                                className={styles['cls-1']}
                                d="M5.34,12.34c.26,2.65-.6,4.38-2.81,5.06"
                              />
                              <circle
                                className={styles['cls-3']}
                                cx="20.74"
                                cy="4"
                                r="0.58"
                              />
                              <circle
                                className={styles['cls-3']}
                                cx="18.82"
                                cy="4"
                                r="0.58"
                              />
                              <circle
                                className={styles['cls-3']}
                                cx="16.91"
                                cy="4"
                                r="0.58"
                              />
                            </g>
                          </g>
                        </svg>
                        <h4
                          dangerouslySetInnerHTML={{
                            __html: t('Air conditioner'),
                          }}
                        ></h4>
                      </li>
                    )}
                  </ul>
                </div>
                <div className={styles['room-card-footer']}>
                  {variant == 'defualt' && (
                    <a
                      style={{ textDecoration: 'underline' }}
                      href={`./rooms.php?room=${room.num}`}
                      className={styles['quick-links-see-more']}
                    >
                      See more
                    </a>
                  )}
                  {variant == 'book' && (
                    <a
                      style={{
                        textDecoration: 'underline',
                        paddingLeft: '44px',
                        paddingRight: '44px',
                      }}
                      data-cta-room={index}
                      href={`contact.php?room=${room?.name?.split(' ')[1]?.slice(1)}`}
                      onClick={handleClickBookCTA}
                      className={styles['quick-link-check-availability']}
                    >
                      Book
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardRoom;

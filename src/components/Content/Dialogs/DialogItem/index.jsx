import React from 'react';
import style from './DialogItem.module.css'



const DialogItem = (props) => {


    return (
            <div>
                <div>
                    <a className={style.dialogItem} href="/" id={props.id}>
                    <img className={style.avatar} src="https://img1.ak.crunchyroll.com/i/spire4/38e5504baa4dbdc20a4bbf44bd0464761478682726_full.png" alt="Avatar"/>
                    <span className={style.personNum}>{props.personNum}.</span>
                        {props.name}
                  </a>
                </div>

            </div>
    )
}
export default DialogItem;
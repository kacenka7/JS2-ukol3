import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { Header } from '../components/Headr.jsx';
import { Description } from '../components/Estate.jsx';



const adress = window.location.pathname
const index = adress.indexOf('.');
const page =  adress.slice(0, index);

const response = await fetch (`https://apps.kodim.cz/daweb/trening-api/apis/realitka${page}`);
const data = await response.json();


document.querySelector('#root').innerHTML = render(   
<div>     
<Header />
<Description data={data} />

</div>
);
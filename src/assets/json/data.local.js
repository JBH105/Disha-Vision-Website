import pservice1 from '../pservice_1.png';
import pservice2 from '../pservice_2.png';
import pservice3 from '../pservice_3.png';
import pservice4 from '../pservice_4.png';
import pservice5 from '../pservice_5.png';
import pservice6 from '../pservice_6.png';
import dsp1 from '../DSP1.png';
import dsp2 from '../DSP2.png';
import devi1 from '../devi1.png';
import devi2 from '../devi2.png';
import devi3 from '../devi3.png';

export const projectData = {

  apartmentProjects: [
    { id: 1, src: pservice1, title: "Dagga Sapphire", img: [dsp1], location: 'Camp, Amravati', size: '4065 sq.ft', type: 'Residential apartment', otherImages: [dsp2], description: 'The Leaf House is a weekend family home in the lush surrounds of Alibaug, Maharashtra, embedded in a verdant 1.3 acre site at the foothills, away from the sea. The leisurely family home required living spaces, kitchen, dining, a master bedspace, children’s room, a space for guests and a play area as part of the residential architecture. The name and ensuing architectural form of the home emerged from a serendipitous sight of dried leaves strewn about the site.' },
    { id: 2, src: pservice2, title: "Devi's Heaven", img: [devi1], location: 'Camp, Amravati', size: '4065 sq.ft', type: 'Residential apartment', otherImages: [devi2, devi3], description: "The Leaf House is a weekend family home in the lush surrounds of Alibaug, Maharashtra, embedded in a verdant 1.3 acre site at the foothills, away from the sea. The leisurely family home required living spaces, kitchen, dining, a master bedspace, children’s room, a space for guests and a play area as part of the residential architecture. The name and ensuing architectural form of the home emerged from a serendipitous sight of dried leaves strewn about the site." },
    { id: 3, src: pservice3, title: "Hardeo Residency" },
    { id: 4, src: pservice4, title: "Kakraniya Residency" },
    { id: 5, src: pservice5, title: "Mahendra Adobes" },
    { id: 6, src: pservice6, title: "Sky tower" }
  ],

  banquetProject: [
    { id: 7, src: pservice1, title: "Lali Lawns" ,},
    { id: 8, src: pservice2, title: "Sikchi Resort" },
    { id: 9, src: pservice3, title: "Hardeo Residency" }
  ],

  bungalowProject: [
    { id: 1, src: pservice1, title: "Dagga Sapphire" },
    { id: 2, src: pservice2, title: "Devi's Heaven" }
  ],

  CommercialProject: [
    { id: 1, src: pservice1, title: "Dagga Sapphire" },
    { id: 2, src: pservice2, title: "Devi's Heaven" }
  ],

  CommercialcumresidentialProject: [
    { id: 1, src: pservice1, title: "Dagga Sapphire" },
    { id: 2, src: pservice2, title: "Devi's Heaven" }
  ],

  HospitalProject: [
    { id: 1, src: pservice1, title: "Dagga Sapphire" },
    { id: 2, src: pservice2, title: "Devi's Heaven" }
  ],

  MallProject: [
    { id: 1, src: pservice1, title: "Dagga Sapphire" },
    { id: 2, src: pservice2, title: "Devi's Heaven" }
  ],

  TownshipProject: [
    { id: 1, src: pservice1, title: "Dagga Sapphire" },
    { id: 2, src: pservice2, title: "Devi's Heaven" }
  ]
}

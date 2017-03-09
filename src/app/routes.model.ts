export interface Demo {
  alias: string;
  title: string;
  description: string;
  link: string[];
};

export const DemosModel: Demo[] = [
  {
    alias: 'slides',
    title: 'Voice UI Slides',
    description: 'Presentation deck for this talk',
    link: ['/slides']
  },
  {
    alias: 'databank',
    title: 'World Development Indicators',
    description: 'Reimagine the way to visualize data found on the World Bank website',
    link: ['/databank']
  }
];

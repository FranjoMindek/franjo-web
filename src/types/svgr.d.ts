declare type SVGComponent = React.FC<React.SVGProps<SVGSVGElement>>;
declare type SVGData = {
  blurHeight: number;
  blurWidth: number;
  height: number;
  width: number;
  src: string;
};

declare module '*.svg' {
  const ReactComponent: SVGComponent;
  export default ReactComponent;
}

declare module '*.svg?url' {
  const svgData: SVGData;
  export default svgData;
}

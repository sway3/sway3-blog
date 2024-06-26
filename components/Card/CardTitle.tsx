interface CardTitleProps {
  children: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return <h3 className="text-xl font-semibold text-black">{children}</h3>;
};

export default CardTitle;

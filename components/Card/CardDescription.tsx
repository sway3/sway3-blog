interface CardDescriptionProps {
  children: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ children }) => {
  return <p>{children}</p>;
};

export default CardDescription;

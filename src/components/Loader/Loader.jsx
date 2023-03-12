import { ThreeDots } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoader>
      <ThreeDots
        height="80"
        width="80"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        color="#303f9f"
      />
    </StyledLoader>
  );
};

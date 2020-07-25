import {
  StatisticsContainer,
  StatisticsRow,
  StatisticsColumn,
  IconContainer,
  Line,
} from "./styles";

const Statistics = () => {
  return (
    <StatisticsContainer>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with <br />
        our advanced statistic dashboard
      </p>
      <StatisticsRow>
        <Line />
        <StatisticsColumn>
          <IconContainer>
            <img
              src="/images/icon-brand-recognition.svg"
              alt="brand-recognition-icon"
            />
          </IconContainer>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidende in your content.
          </p>
        </StatisticsColumn>
        <StatisticsColumn>
          <IconContainer>
            <img
              src="/images/icon-detailed-records.svg"
              alt="detailed-records-icon"
            />
          </IconContainer>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </StatisticsColumn>
        <StatisticsColumn>
          <IconContainer>
            <img
              src="/images/icon-fully-customizable.svg"
              alt="fully-customizable-icon"
            />
          </IconContainer>
          <h3>Fully Customizable</h3>
          <p>
            Improve your brand awareness and content discoverability through
            customizable links. supercharging audience engagement.
          </p>
        </StatisticsColumn>
      </StatisticsRow>
    </StatisticsContainer>
  );
};

export default Statistics;

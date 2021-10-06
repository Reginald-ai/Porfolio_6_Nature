const state = () => ({
  sCards: [
    {
      id: 1,
      img: "1.png",
      title: "Global Warming",
      subtitle:
        "The Earth is warming up, and humans are at least partially to blame. ",
      text1:
        "Global warming is the long-term warming of the planet’s overall temperature. Though this warming trend has been going on for a long time, its pace has significantly increased in the last hundred years due to the burning of fossil fuels. As the human population has increased, so has the volume of fossil fuels burned. Fossil fuels include coal, oil, and natural gas, and burning them causes what is known as the “greenhouse effect” in Earth’s atmosphere. ",
      text2:
        "The greenhouse effect is when the Sun’s rays penetrate the atmosphere, but when that heat is reflected off the surface cannot escape back into space. Gases produced by the burning of fossil fuels prevent the heat from leaving the atmosphere. These greenhouse gasses are carbon dioxide, chlorofluorocarbons, water vapor, methane, and nitrous oxide. The excess heat in the atmosphere has caused the average global temperature to rise overtime, otherwise known as global warming.",
      text3:
        "Global warming has presented another issue called climate change. Sometimes these phrases are used interchangeably, however, they are different. Climate change refers to changes in weather patterns and growing seasons around the world. It also refers to sea level rise caused by the expansion of warmer seas and melting ice sheets and glaciers. Global warming causes climate change, which poses a serious threat to life on earth in the forms of widespread flooding and extreme weather. Scientists continue to study global warming and its impact on Earth."
    },
    {
      id: 2,
      img: "2.png",
      title: "Save Animals",
      subtitle:
        "Save Animals Facing Extinction was created to support Initiative 1401",
      text1:
        "Originally established in 2015, Save Animals Facing Extinction was created to support Initiative 1401, a first-of-its-kind ballot measure in Washington State which prohibited the purchase, sale, and distribution of products made from a list of 10 endangered animals.",
      text2:
        "  Working closely with partners from the nation’s leading conservation, education, and zoological organizations, as well as grassroots donors from across the United States, I-1401 passed with over 70 percent support in November 2015. In 2016, Save Animals Facing Extinction was relaunched as a 501(c)(4) social welfare, not-for-profit organization that supports policies nationwide at the state and federal levels that will protect Earth’s most precious wildlife.  ",
      text3:
        "The best way to protect our planet’s endangered wildlife is to ensure that strong laws are in place and that severe penalties are levied against the criminals who deal in wildlife trafficking.  Humans are the reason that so many of our most iconic and important wildlife are struggling to survive, and together, humans can work to save them.The best way to protect our planet’s endangered wildlife is to ensure that strong laws are in place and that severe penalties are levied against the criminals who deal in wildlife trafficking.  Humans are the reason that so many of our most iconic and important wildlife are struggling to survive, and together, humans can work to save them. Despite our successes, opponents continue to block similar attempts across the country."
    },
    {
      id: 3,
      img: "3.png",
      title: "Planting trees",
      subtitle:
        "Planting a billion trees can help us curb the effects of climate change. ",
      text1:
        "The Nature Conservancy's Plant a Billion Trees campaign is a major forest restoration effort with a goal of planting a billion trees across the planet. Trees provide so many benefits to our everyday lives. ",
      text2:
        " They filter clean air, provide fresh drinking water, help curb climate change, and create homes for thousands of species of plants and animals.  Planting a Billion Trees can help save the Earth from deforestation.  It’s a big number, but we know we can do it with your help.  ",
      text3:
        "Trees are the most important part of the ecosystem which helps in balancing the climate and the environment. A forest comprises of trees and plants helps to reverse the global warming which adversely maintain the health of the earth. Global warming is the biggest problem facing by earth and the humankind nowadays which adversely effects our earth and results of the same are observed in these days are:"
    },
    {
      id: 4,
      img: "4.png",
      title: "Good communication ",
      subtitle:
        "Good communication skills are key to success in life established that",
      // "Work and relationships. Without effective communication, a message can turn into error, misunderstanding, frustration, or even disaster by being misinterpreted or poorly delivered.",
      text1:
        "They established that the most desirable quality in a new hire is effective communication skills. They concluded that good communication skills are more important than ever for business and professional success.",
      text2:
        "Communication is the process by which we exchange information between individuals or groups of people. It is a process where we try as clearly and accurately as we can, to convey our thoughts, intentions and objectives.",
      text3:
        "Communication is successful only when both the sender and the receiver understand the same information. In today's highly informational and technological environment, it has become increasingly important to have good communication skills."
    }
  ]
});

const getters = {
  getsCards: state => id => {
    return state.sCards.find(sCard => sCard.id == id);
  }
};
export default {
  state,
  getters
};

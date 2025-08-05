import { newsData } from "../../data/newsdata";

const NewsSection = () => {
  return (
    <section className="w-full bg-[#e9e3d4] text-[#283e49] py-20 px-4 md:px-24 space-y-10">
      <h2 className="text-4xl font-bold text-center mb-10">News & Updates</h2>
      <div className="space-y-6">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex flex-col space-y-1">
              <h3 className="text-lg font-semibold">{news.title}</h3>
              {news.date && <p className="text-sm text-gray-600">{news.date}</p>}
            </div>
            {news.link && (
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 md:mt-0 inline-block text-[#d90429] hover:underline font-medium"
              >
                Click to Download
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;

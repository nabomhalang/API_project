/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const d = new Date();
function get_date_str(date)
{
    var sYear = date.getFullYear();
    var sMonth = date.getMonth();
    var sDate = date.getDate();

    sMonth = sMonth > 9 ? sMonth : "0" + sMonth;
    sDate  = sDate > 9 ? sDate : "0" + sDate;
    return sYear + sMonth + sDate;
}

const _date = get_date_str(d);


module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${_date}`,
      },
    ];
  },
};

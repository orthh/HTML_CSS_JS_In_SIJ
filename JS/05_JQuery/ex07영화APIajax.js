// ajax -> 비동기통신 방법

// jQuery에 접근 -> $.
// ajax 메소드 사용 -> ajax()
// 데이터는 JSON 형태로  -> {key:value, ~}

let movieurl =
  "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=";
// "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101";

const getAPI = () => {
  let inputDate = $("input").val().replaceAll("-", "");
  $.ajax({
    // 어느 데이터를 가져올 건지
    url: movieurl + inputDate,
    // 어떤 방식으로 통신할 건지
    type: "GET",
    // 통신 성공 시 실행 로직
    success: (res) => {
      // alert("통신 성공!");
      const rankList = res.boxOfficeResult.dailyBoxOfficeList;

      // 테이블
      let tableForm = `
        <table>
          <tr>
            <th>순위</th>
            <th>영화제목</th>
            <th>개봉일</th>
          </tr>

      `;

      for (const i of rankList) {
        tableForm += `
          <tr>
            <td>${i.rank}</td>
            <td>${i.movieNm}</td>
            <td>${i.openDt}</td>
          </tr>
        `;
      }

      // rankList.forEach((item) => {
      //   // $(".container table").append(`
      //   //   <tr>
      //   //     <td>${item.rank}</td>
      //   //     <td>${item.movieNm}</td>
      //   //     <td>${item.openDt}</td>
      //   //   </tr>
      //   // `);
      // });

      tableForm += `</table>`;

      $(".container").html(tableForm);
    },
    // 통신 실패 시 실행 로직
    error: () => {
      alert("통신 실패!");
    },
  });
};

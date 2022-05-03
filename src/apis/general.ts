type TNiceDate = {
  toString: () => string;
  toDate: () => Date;
};

export const TimeFunction = () => {
  // All of time function is using ISO time format
  const tempDate = new Date().toISOString().split("T")[0];
  const today = {
    toString: (): string => {
      return tempDate;
    },
    toDate: (): Date => {
      return new Date(tempDate);
    },
  };
  // return date of week by specific date
  const DateOfWeek = (ISODate: string): Array<TNiceDate> => {
    const temp = [] as TNiceDate[];
    for (let i = 0; i < 7; i++) {
      const tempTheDate = new Date(ISODate);
      tempTheDate.setDate(tempTheDate.getDate() + i);
      const theDate = {
        toString: () => tempTheDate.toISOString().split("T")[0],
        toDate: () => tempTheDate,
      };
      temp.push(theDate);
    }
    return temp;
  };
  // this function used to compare two time
  const TimeCompare = (aTime: string, bTime: string) => {
    const tempA = aTime.split(":");
    const tempB = bTime.split(":");
    const dateA = new Date("2020-01-01");
    const dateB = new Date("2020-01-01");
    dateA.setHours(parseInt(tempA[0]), parseInt(tempA[1]));
    dateB.setHours(parseInt(tempB[0]), parseInt(tempB[1]));
    // console.log(dateA, dateB);
    return dateA >= dateB;
  };
  return {
    today,
    DateOfWeek,
    TimeCompare,
  };
};

export const DecodeFunction = () => {
  const getDataFromJWT = function (jwt: string, key: string): string {
    if (jwt === undefined) {
      return "";
    }
    const payload = jwt.split(".")[1];
    const payloadObj = JSON.parse(atob(payload));
    if (Object.keys(payloadObj).includes(key)) {
      return payloadObj[key];
    }
    return "";
  };
  return {
    getDataFromJWT,
  };
};

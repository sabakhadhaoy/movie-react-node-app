const environment = {
  DEV: process.env.REACT_APP_DEV,
  QA: process.env.REACT_APP_QA,
  TQA: process.env.REACT_APP_TQA,
  PV: process.env.REACT_APP_PV,
  PROD: process.env.REACT_APP_PROD
}

export default environment.DEV;
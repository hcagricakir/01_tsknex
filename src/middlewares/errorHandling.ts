export default (err: { statusCode: any; }, req: any, res: { status: (arg0: any) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; }, next: any) => {
    res.status(err.statusCode).json(err);
  };
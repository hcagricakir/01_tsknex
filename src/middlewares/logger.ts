export default (req: { method: any; hostname: any; }, res: any, next: () => void) => {
  console.log(`${new Date().toUTCString()} - ${req.method} - ${req.hostname}`);
  next();
};
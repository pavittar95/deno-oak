export const fileUpload = async (context: any, next: any) => {
  const file = context.uploadedFiles;
  console.log(file);
  context.response.body = "success";
};

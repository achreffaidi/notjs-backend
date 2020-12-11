import { Injectable } from '@nestjs/common';

@Injectable()
export class AzureService {

static PDF_BUCKET : String = "pdfcontainer"
static IMAGE_BUCKET : String = "imagecontainer"


async generateV4UploadSignedUrl(containerName:String,blobName:String) : Promise<any> {
  const {
    BlobSASPermissions,
    StorageSharedKeyCredential,
    generateBlobSASQueryParameters,
  } = require("@azure/storage-blob");
  
  const  STORAGE_ACCOUNT_KEY = "m73omXGzPMhcd/8JP1+MrzZIsi0XXcXknZtC8LAPhZHM8g1Wwd69UMovY66mFWiCfHq4OXzRBOUCFX37wDvtnQ==";
  const STORAGE_ACCOUNT_NAME = "insat";
  const sharedKeyCredential = new StorageSharedKeyCredential(STORAGE_ACCOUNT_NAME, STORAGE_ACCOUNT_KEY);
  const permissions = BlobSASPermissions.parse("racwd");
  const startDate = new Date();
  const expiryDate = new Date(startDate);
  expiryDate.setMinutes(startDate.getMinutes() + 100);
  startDate.setMinutes(startDate.getMinutes() - 100);
  const queryParams = generateBlobSASQueryParameters(
    {
      containerName,
      blobName,
      permissions: permissions.toString(),
      startsOn: startDate,
      expiresOn: expiryDate,
    },
    sharedKeyCredential,
  );
  return {
    DocumentUrl: `https://${STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${containerName}/${blobName}`,
    SignedUrl: `https://${STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${containerName}/${blobName}?${queryParams.toString()}`,
  };
  }

}

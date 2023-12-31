import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
​
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  img : any ;
  constructor() { 
  }
​
 uploadFile(file: any, callback) {
    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: 'AKIAQAS7QSJODBCQ24MN',
              secretAccessKey: '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',
              region: 'us-east-1'
          }
      );
      const params = {
          Bucket: 'ann-product-bucket',
          Key: file.name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };

      
      bucket.upload(params, (err: any, data: any) => {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              callback(err, null);

          }
          console.log('Successfully uploaded file.', data);
          console.log(data.Location);
          //img = data.Location;
          callback(null, data.Location);

      });

      ;//for upload progress   
/*bucket.upload(params).on('httpUploadProgress', function (evt) {
          console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
      }).send(function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });*/
}
​
}
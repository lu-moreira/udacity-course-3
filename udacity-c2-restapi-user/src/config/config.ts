export const config = {
  "db": {
    "username": process.env.UDAGRAM_DATABASE_USERNAME,
    "password": process.env.UDAGRAM_DATABASE_PASSWORD,
    "database": process.env.UDAGRAM_DATABASE_DATABASE,
    "host": process.env.UDAGRAM_DATABASE_HOST,
    "dialect": process.env.UDAGRAM_DATABASE_DIALECT
  },
  "aws": {
    "aws_region": process.env.UDAGRAM_AWS_REGION,
    "aws_profile": process.env.UDAGRAM_AWS_PROFILE,
    "aws_media_bucket": process.env.UDAGRAM_AWS_MEDIA_BUCKET
  },
  "jwt_secret": process.env.JWT_SECRET
}

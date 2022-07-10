exports = async (input) => {
  const limit = input && input.limit || 10;
  const offset = input && input.offset || 0;
  
  const cluster = context.services.get("mongodb-atlas")
  const collection = cluster.db('sample_airbnb').collection('listingsAndReviews')
  
  return await collection.find({}).skip(offset).limit(limit).toArray()
}
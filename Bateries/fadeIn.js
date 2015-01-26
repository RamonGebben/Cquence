function repeat( a, c ){
  var result = a;
  for( var i = 0; i < c; i++ ){
    result = Cq.squence( result, a );
  }
  return result;
}
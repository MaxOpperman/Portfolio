import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
      

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque nunc quis sem porta cursus et ac lacus. Maecenas consequat condimentum mauris eu sagittis. In vehicula, eros et viverra porttitor, turpis mi tempor nulla, in convallis quam justo sit amet nulla. Aliquam erat volutpat. Maecenas eros mi, dictum eu libero id, eleifend sollicitudin ex. Proin aliquam lorem in volutpat ornare. Aliquam eget condimentum tellus. Maecenas gravida pellentesque libero, nec cursus lacus tempus at. Quisque eu dui mauris. Morbi lacinia id mi vel blandit. Aenean dignissim ante blandit, sollicitudin turpis sit amet, auctor justo. Etiam urna lectus, eleifend vel velit nec, varius dignissim est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel euismod orci.
      
      Maecenas eleifend nulla et dignissim euismod. Morbi aliquam lectus et nisi porttitor, a finibus enim molestie. Maecenas non ante sed est congue iaculis. Nulla scelerisque viverra tincidunt. Curabitur risus tellus, porta nec bibendum quis, consequat vel dui. Proin sit amet sem sit amet felis ultricies pulvinar sed a lacus. Etiam iaculis, turpis convallis efficitur venenatis, lacus orci ultricies nulla, non commodo eros velit id sem. Morbi id arcu eget sem vulputate consequat vel non metus. Ut venenatis aliquam feugiat. Pellentesque feugiat turpis id quam rhoncus, non pharetra quam finibus. Sed at suscipit mauris. Nam quis tellus varius, porttitor nulla vitae, congue ex.
      
      Aenean eget varius neque, consectetur hendrerit libero. Pellentesque sapien nisi, malesuada ut fringilla molestie, commodo ut urna. Aliquam in est et lorem scelerisque viverra. In posuere neque a tempor bibendum. Donec et sem eu sem tristique feugiat vel blandit orci. Nullam ac mauris ipsum. Sed convallis accumsan metus sit amet lacinia. Fusce vitae dui semper, pulvinar enim quis, mattis diam. Aliquam at diam sit amet metus hendrerit rhoncus. Proin eleifend libero eros, non facilisis mauris auctor sed. Quisque varius venenatis nibh eget laoreet. Nullam in odio risus. Aenean quis eros lobortis, volutpat urna at, elementum ex.
      
      Vivamus sodales vel nisl sed scelerisque. Praesent fermentum turpis vitae risus placerat pellentesque. Donec ac diam lacinia, blandit massa consequat, auctor ante. Ut a tempus sem. Aenean vitae ex eu purus pharetra aliquam. Maecenas posuere scelerisque leo ut sodales. Aenean non suscipit ante. Sed iaculis condimentum risus, quis hendrerit elit sagittis sed. Nam pulvinar, mauris id vehicula cursus, velit nisi dapibus nisi, nec porta nulla dui nec sapien. Maecenas feugiat libero est, vitae tempor diam pulvinar bibendum. Phasellus iaculis, urna iaculis luctus vestibulum, ante leo ullamcorper tortor, non convallis nibh diam varius sem.
      
      Cras commodo ante et tristique imperdiet. Donec et commodo arcu. Donec convallis quam fermentum dolor malesuada euismod. Fusce ut elementum odio. Cras consectetur iaculis augue quis mattis. Pellentesque quis diam et tellus mattis efficitur. Vivamus auctor, risus in rhoncus scelerisque, sapien sapien pellentesque neque, vitae iaculis lacus diam ut nisi. 
          
    </Stack>
  );
}
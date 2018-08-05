var nama = 'Zakaria';
var peran = 'Ksatria';

if (nama === ''  && peran === '' ) {
  console.log('Nama harus diisi!');
} else if (nama === 'Zakaria' && peran === '') {
  console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
} else if (nama === 'Zakaria' && peran === 'Ksatria') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!');
} else if (nama === 'Zakaria' && peran === 'Tabib' ) {
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.');
} else if (nama === 'Zakaria' && peran === 'Penyihir') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
}   
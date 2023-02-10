
import Container from '@material-ui/core/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link';

export default function VirtualPage() {
    return (
        <Box  className='login_wrapper'
            sx={{
                width: '100%', 
                maxWidth: '355px',
                margin: '0 auto',
            }}
        >
            <Container maxWidth="lg">
                <h1 className='text-white text-center'  >
               Blue Sky
                </h1>
                <hr
                    style={{
                        color: '#fff',
                        backgroundColor: '#fff',
                        height: '3px',
                        width: '240px;', 
                    }}
                />
                    <Box className='mt-6'
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-around',
                        }}
                        
                    >
                        <Button  variant="outlined" className='bg-white rounded-full w-60 hover:bg-black hover:text-white' >
                        <Link href='/login'> Sign In</Link>
                        </Button>
                        <Button variant="outlined" className='bg-white rounded-full w-60 mt-2 hover:bg-black hover:text-white'>
                        <Link href='/register'>New Member</Link></Button>
                    </Box>
            
            </Container>
        </Box>
     
    )

}
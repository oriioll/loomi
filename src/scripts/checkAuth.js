/**
 * Function that checks if the user is logged (needed to enter to the page)
 */
async function checkUser() {
    const { data: { user } } = await _supabase.auth.getUser();

    if (!user) {
        window.location.href = 'index.html';
    } else {
        console.log('Welcome back');
    }
}

checkUser();
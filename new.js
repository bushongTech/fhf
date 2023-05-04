router.get('/query1', async (req, res) => {
    try {
        await connectionPool.connect();
        const request = new connectionPool.Request();
        const result = await request.query('QUERY_1');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data for query 1' });
    } finally {
        connectionPool.close();
    }
});

router.get('/query2', async (req, res) => {
    try {
        await connectionPool.connect();
        const request = new connectionPool.Request();
        const result = await request.query('QUERY_2');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data for query 2' });
    } finally {
        connectionPool.close();
    }
});

router.get('/query3', async (req, res) => {
    try {
        await connectionPool.connect();
        const request = new connectionPool.Request();
        const result = await request.query('QUERY_3');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data for query 3' });
    } finally {
        connectionPool.close();
    }
});

router.get('/query4', async (req, res) => {
    try {
        await connectionPool.connect();
        const request = new connectionPool.Request();
        const result = await request.query('QUERY_4');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data for query 4' });
    } finally {
        connectionPool.close();
    }
});
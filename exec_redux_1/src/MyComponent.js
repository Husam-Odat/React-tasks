// MyComponent.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';

class MyComponent extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const { data, loading, error } = this.props;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>Error: {error.message}</p>;
        }

        return (
            <div>
                {data && <p>{data}</p>}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.data,
    loading: state.loading,
    error: state.error,
});

export default connect(mapStateToProps, { fetchData })(MyComponent);

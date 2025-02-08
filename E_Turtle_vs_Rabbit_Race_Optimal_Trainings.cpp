#include<bits/stdc++.h>
using namespace std;

#define int long long int
#define double long double
#define INT_MAX LLONG_MAX
#define INT_MIN LLONG_MIN
#define endl '\n'
#define vin(a) for(int i=0;i<(a).size();i++)cin>>a[i];
#define vout(a) for(int i=0;i<a.size();i++)cout<<a[i]<<' ';cout<<endl;
#define vpin(a) for(int i=0;i<(a).size();i++)cin>>a[i].first;for(int i=0;i<(a).size();i++)cin>>a[i].second;
#define vpout(a) for(int i=0;i<a.size();i++)cout<<a[i].first<<' '<<a[i].second<<endl;cout<<endl;
#define sin(a,n) for(int i=0;i<n;i++){int temp;cin>>temp;a.insert(temp);}
#define sout(a) for(auto i:a)cout<< i<<' ';cout<<endl;
#define cout(x) cout<<setprecision(20)<<x<<endl 
#define all(x) (x).begin(),(x).end()
#define rall(x) (x).begin(),(x).end(),greater<int>()

const int M = 1e9+7;
const int N = 1e5+10;

int n;

void precalc(){}

void resolve(){
	cin >> n;
	vector<int> v(n);
	vin(v);
	vector<int> prefix(n+1);
	prefix[0] = 0;
	for(int i=1 ; i<=n ; i++) prefix[i]=prefix[i-1]+v[i-1];
	int q;
	cin >> q;
	while(q--){
		int l,k;
		cin >> l >> k;
		int target = prefix[l-1]+k;
		int up = upper_bound(all(prefix),target)-prefix.begin();
		int lb = lower_bound(all(prefix),target)-prefix.begin();
		if(up==lb) lb--;
		if(up==n+1) {up--;lb--;}
		int ans = -1;
		if(lb>=l && prefix[up]-target>target-prefix[lb]) ans = lb;
		else ans = up;
		cout << ans << " ";
	}
	cout << endl;
}

int32_t main(){
	ios_base::sync_with_stdio(false); cin.tie(0); cout.tie(0);
	precalc();
	int t;
	cin >> t;
	while(t--){
		resolve();
	}
	return 0;
}